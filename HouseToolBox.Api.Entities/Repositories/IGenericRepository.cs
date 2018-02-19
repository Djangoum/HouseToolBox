using HouseToolBox.Api.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace HouseToolBox.Api.Models.Repositories
{
    public interface IGenericRepository<TEntity, TKey>
        where TEntity : BaseDao<TKey>
        where TKey : IEquatable<TKey>
    {
        void Add(TEntity entity);

        Task<int> Count(Expression<Func<TEntity, bool>> condition);

        Task<List<TEntity>> Get(Expression<Func<TEntity, bool>> filter = null, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null, int? page = null, int? pageSize = null, params Expression<Func<TEntity, object>>[] includes);

        Task<TEntity> GetById(TKey id, List<Expression<Func<TEntity, object>>> includes = null);

        Task<TEntity> GetSingle(Expression<Func<TEntity, bool>> filter, params Expression<Func<TEntity, object>>[] includes);

        void Remove(TEntity entityToDelete);

        Task Remove(TKey id);

        Task SaveChangesAsync();

        void Update(TEntity entityToUpdate);
    }
}