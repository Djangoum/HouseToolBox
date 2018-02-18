using HouseToolBox.Api.Models.Entities;
using HouseToolBox.Api.Models.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace HouseToolBox.Api.Data
{
    using Repositories;

    public static class Module
    {
        public static void RegisterModule(IServiceCollection services)
        {
            services.AddScoped(x => (IGenericRepository<Product, Guid>)new GenericRepository<Product, Guid>(x.GetService<HouseToolBoxContext>()));
            services.AddScoped(x => (IGenericRepository<Order, Guid>)new GenericRepository<Order, Guid>(x.GetService<HouseToolBoxContext>()));
            services.AddScoped(x => (IGenericRepository<Seller, Guid>)new GenericRepository<Seller, Guid>(x.GetService<HouseToolBoxContext>()));
            services.AddScoped(x => (IGenericRepository<Tag, Guid>)new GenericRepository<Tag, Guid>(x.GetService<HouseToolBoxContext>()));
        }
    }
}