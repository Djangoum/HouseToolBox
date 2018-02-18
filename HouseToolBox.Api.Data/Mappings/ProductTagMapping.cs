using HouseToolBox.Api.DataExtensions;
using HouseToolBox.Api.Models.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HouseToolBox.Api.Data.Mappings
{
    public class ProductTagMapping : DbEntityConfiguration<ProductTag>
    {
        public override void Configure(EntityTypeBuilder<ProductTag> entity)
        {
            entity.HasKey("IdProduct", "IdTag");
            entity.HasOne(x => x.Product).WithMany(x => x.Tags).HasForeignKey(x => x.IdProduct);
            entity.HasOne(x => x.Tag).WithMany(x => x.Products).HasForeignKey(x => x.IdTag);
        }
    }
}