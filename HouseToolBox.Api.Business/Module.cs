using HouseToolBox.Api.Business.Models.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace HouseToolBox.Api.Business
{
    public static class Module
    {
        public static void RegisterModule(IServiceCollection servicesCollection)
        {
            servicesCollection.AddScoped<IProductsBusiness, ProductsBusiness>();
        }
    }
}
