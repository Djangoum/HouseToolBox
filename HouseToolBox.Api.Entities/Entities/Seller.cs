using System;
using System.Collections.Generic;

namespace HouseToolBox.Api.Models.Entities
{
    public class Seller : BaseDao<Guid>
    {
        public string Name { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}