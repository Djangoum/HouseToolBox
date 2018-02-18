using HouseToolBox.Api.DataExtensions;
using HouseToolBox.Api.Models.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HouseToolBox.Api.Data.Mappings
{
    public class ProductMapping : DbEntityConfiguration<Product>
    {
        public override void Configure(EntityTypeBuilder<Product> entity)
        {
            entity.HasKey(x => x.Id);
            entity.Property(x => x.Name).HasMaxLength(100).IsRequired();
            entity.HasOne(x => x.Seller).WithMany(x => x.Products).HasForeignKey(x => x.IdSeller);
            entity.HasMany(x => x.Tags).WithOne(x => x.Product).HasForeignKey(x => x.IdProduct);
            entity.HasMany(x => x.PurchasedOrders).WithOne(x => x.Product).HasForeignKey(x => x.IdProduct);
        }
    }
}