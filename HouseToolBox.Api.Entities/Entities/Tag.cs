using System;
using System.Collections.Generic;

namespace HouseToolBox.Api.Models.Entities
{
    public class Tag : BaseDao<Guid>
    {
        public string Name { get; set; }
        public virtual ICollection<ProductTag> Products { get; set; }
    }
}