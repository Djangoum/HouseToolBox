using HouseToolBox.Api.Models.Entities.Enums;
using System;
using System.Collections.Generic;

namespace HouseToolBox.Api.Models.Entities
{
    public class Product : BaseDao<Guid>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        public ProductType Type { get; set; }
        public virtual Seller Seller { get; set; }
        public Guid IdSeller { get; set; }
        public virtual ICollection<ProductTag> Tags { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<PurchasedOrders> PurchasedOrders { get; set; }
    }
}