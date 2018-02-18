using HouseToolBox.Api.DataExtensions;
using HouseToolBox.Api.Models.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HouseToolBox.Api.Data.Mappings
{
    public class PurchasedOrdersMapping : DbEntityConfiguration<PurchasedOrders>
    {
        public override void Configure(EntityTypeBuilder<PurchasedOrders> entity)
        {
            entity.HasKey(x => x.Id);
            entity.HasOne(x => x.Product).WithMany(x => x.PurchasedOrders).HasForeignKey(x => x.IdProduct);
        }
    }
}
