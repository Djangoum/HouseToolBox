using System;

namespace HouseToolBox.Api.Models.Entities
{
    public class Order : BaseDao<Guid>
    {
        public virtual Product Product { get; set; }
        public Guid IdProduct { get; set; }
        public decimal Price { get; set; }
        public decimal Quantity { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LimitDate { get; set; }
        public bool Bought { get; set; }
    }
}