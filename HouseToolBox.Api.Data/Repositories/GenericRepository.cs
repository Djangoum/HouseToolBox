using HouseToolBox.Api.Models.Entities;
using HouseToolBox.Api.Models.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace HouseToolBox.Api.Data.Repositories
{
    public class GenericRepository<TEntity, TKey> : IGenericRepository<TEntity, TKey> where TEntity : BaseDao<TKey>
       where TKey : IEquatable<TKey>
    {
        public GenericRepository(DbContext context)
        {
            Context = context;
            Set = context.Set<TEntity>();
        }

        protected DbContext Context { get; }

        protected DbSet<TEntity> Set { get; }

        public virtual Task<List<TEntity>> Get(Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            int? page = null,
            int? pageSize = null,
            params Expression<Func<TEntity, object>>[] includes)
        {
            IQueryable<TEntity> query = Set;

            if (includes != null)
            {
                query = includes.Aggregate(query, (current, include) => current.Include(include));
            }
            if (orderBy != null)
            {
                query = orderBy(query);
            }
            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (page != null && pageSize != null)
            {
                query = query.Skip((page.Value - 1) * pageSize.Value).Take(pageSize.Value);
            }
            return query.ToListAsync();
        }

        public virtual Task<TEntity> GetById(TKey id, List<Expression<Func<TEntity, object>>> includes = null)
        {
            IQueryable<TEntity> query = Set;

            if (includes != null)
            {
                query = includes.Aggregate(query, (current, include) => current.Include(include));
            }

            return query.FirstOrDefaultAsync(t => t.Id.Equals(id));
        }

        public Task<TEntity> GetSingle(Expression<Func<TEntity, bool>> filter, params Expression<Func<TEntity, object>>[] includes)
        {
            IQueryable<TEntity> query = Set;
            Task<TEntity> result;

            if (includes != null)
            {
                query = includes.Aggregate(query, (current, include) => current.Include(include));
            }
            if (filter != null)
            {
                result = query.SingleOrDefaultAsync(filter);
            }
            else
            {
                result = query.FirstOrDefaultAsync();
            }

            return result;
        }

        public virtual void Add(TEntity entity)
        {
            Set.Add(entity);
        }

        public virtual async Task Remove(TKey id)
        {
            var entityToDelete = await Set.FindAsync(id);
            Remove(entityToDelete);
        }

        public virtual Task<int> Count(Expression<Func<TEntity, bool>> condition)
        {
            return Set.Where(condition).CountAsync();
        }

        public virtual void Update(TEntity entityToUpdate)
        {
            Set.Attach(entityToUpdate);
            Context.Entry(entityToUpdate).State = EntityState.Modified;
        }

        public virtual void Remove(TEntity entityToDelete)
        {
            if (Context.Entry(entityToDelete).State == EntityState.Detached)
            {
                Set.Attach(entityToDelete);
            }

            Set.Remove(entityToDelete);
        }

        public Task SaveChangesAsync()
        {
            return Context.SaveChangesAsync();
        }
    }
}