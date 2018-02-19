using HouseToolBox.Api.Models.Entities;
using HouseToolBox.Api.Models.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HouseToolBox.Api.Business
{
    public abstract class GenericBusiness<TRepository, TEntity, TKey> : IGenericBusiness<TEntity, TKey>
        where TRepository : IGenericRepository<TEntity, TKey>
        where TEntity : BaseDao<TKey>
        where TKey : IEquatable<TKey>
    {
        protected readonly IGenericRepository<TEntity, TKey> _repository;

        public GenericBusiness(IGenericRepository<TEntity, TKey> repository)
        {
            _repository = repository;
        }

        public Task Add(TEntity entity)
        {
            _repository.Add(entity);
            return _repository.SaveChangesAsync();
        }

        public Task<List<TEntity>> GetAll()
                    => _repository.Get(x => true);

        public Task<TEntity> GetById(TKey id)
            => _repository.GetById(id);
        public Task Remove(TEntity entity)
        {
            _repository.Remove(entity);
            return _repository.SaveChangesAsync();
        }

        public Task Remove(TKey key) => _repository.Remove(key).ContinueWith((task) => _repository.SaveChangesAsync());

        public Task Update(TEntity entity)
        {
            _repository.Update(entity);
            return _repository.SaveChangesAsync();
        }
    }
}