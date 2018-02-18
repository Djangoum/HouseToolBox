using HouseToolBox.Api.DataExtensions;
using HouseToolBox.Api.Models.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HouseToolBox.Api.Data.Mappings
{
    public class TagMapping : DbEntityConfiguration<Tag>
    {
        public override void Configure(EntityTypeBuilder<Tag> entity)
        {
            entity.HasKey(x => x.Id);
            entity.HasMany(x => x.Products).WithOne(x => x.Tag).HasForeignKey(x => x.IdTag);
        }
    }
}