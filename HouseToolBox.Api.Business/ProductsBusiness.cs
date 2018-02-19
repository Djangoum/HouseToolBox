using HouseToolBox.Api.Business.Models.Interfaces;
using HouseToolBox.Api.Models.Entities;
using HouseToolBox.Api.Models.Repositories;
using System;

namespace HouseToolBox.Api.Business
{
    public class ProductsBusiness : GenericBusiness<IGenericRepository<Product, Guid>, Product, Guid>, IProductsBusiness
    {
        public ProductsBusiness(IGenericRepository<Product, Guid> _productsRepository) : base(_productsRepository)
        {
        }
    }
}