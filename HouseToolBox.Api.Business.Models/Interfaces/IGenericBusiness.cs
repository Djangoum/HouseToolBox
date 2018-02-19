using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HouseToolBox.Api.Models.Entities;

namespace HouseToolBox.Api.Business
{
    public interface IGenericBusiness<TEntity, TKey>
        where TEntity : BaseDao<TKey>
        where TKey : IEquatable<TKey>
    {
        Task Add(TEntity entity);
        Task<List<TEntity>> GetAll();
        Task<TEntity> GetById(TKey id);
        Task Remove(TEntity entity);
        Task Remove(TKey key);
        Task Update(TEntity entity);
    }
}