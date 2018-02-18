using System;

namespace HouseToolBox.Api.Models.Entities
{
    public class PurchasedOrders : BaseDao<Guid>
    {
        public Guid IdProduct { get; set; }
        public decimal Price { get; set; }
        public virtual Product Product { get; set; }
        public DateTime PurchaseDate { get; set; }
        public decimal Quantity { get; set; }
    }
}