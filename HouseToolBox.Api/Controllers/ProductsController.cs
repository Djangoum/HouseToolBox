using HouseToolBox.Api.Business.Models.Interfaces;
using HouseToolBox.Api.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HouseToolBox.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Products")]
    public class ProductsController : HouseToolBoxController
    {
        private readonly IProductsBusiness _productsBusiness;

        public ProductsController(IProductsBusiness productsBusiness)
        {
            this._productsBusiness = productsBusiness;
        }

        [HttpDelete("{id}")]
        public async Task Delete(Guid id)
        {
            await _productsBusiness.Remove(id);
        }

        [HttpGet]
        public async Task<IEnumerable<Product>> Get()
        {
            return await _productsBusiness.GetAll();
        }

        [HttpGet("{id}", Name = "Get")]
        public async Task<Product> Get(Guid id)
        {
            return await _productsBusiness.GetById(id);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Product value)
        {
            await _productsBusiness.Add(value);
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromBody]Product value)
        {
            await _productsBusiness.Update(value);
            return Ok();
        }
    }
}