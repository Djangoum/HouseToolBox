using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HouseToolBox.Api.DataExtensions
{
    public abstract class DbEntityConfiguration<TEntity> where TEntity : class
    {
        public abstract void Configure(EntityTypeBuilder<TEntity> entity);
    }
}