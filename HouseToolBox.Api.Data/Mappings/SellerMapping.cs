using HouseToolBox.Api.DataExtensions;
using HouseToolBox.Api.Models.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HouseToolBox.Api.Data.Mappings
{
    public class SellerMapping : DbEntityConfiguration<Seller>
    {
        public override void Configure(EntityTypeBuilder<Seller> entity)
        {
            entity.HasKey(x => x.Id);
            entity.HasMany(x => x.Products);
            entity.Property(x => x.Name).HasMaxLength(100).IsRequired();
        }
    }
}