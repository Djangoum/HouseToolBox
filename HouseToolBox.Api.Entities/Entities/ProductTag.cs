using System;

namespace HouseToolBox.Api.Models.Entities
{
    public class ProductTag
    {
        public Guid IdProduct { get; set; }
        public Guid IdTag { get; set; }
        public virtual Product Product { get; set; }
        public virtual Tag Tag { get; set; }
    }
}