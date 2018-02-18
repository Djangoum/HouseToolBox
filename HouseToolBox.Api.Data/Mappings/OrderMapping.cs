using HouseToolBox.Api.DataExtensions;
using HouseToolBox.Api.Models.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HouseToolBox.Api.Data.Mappings
{
    public class OrderMapping : DbEntityConfiguration<Order>
    {
        public override void Configure(EntityTypeBuilder<Order> entity)
        {
            entity.HasKey(x => x.Id);
            entity.HasOne(x => x.Product).WithMany(x => x.Orders).HasForeignKey(x => x.IdProduct);
        }
    }
}