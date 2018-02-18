using HouseToolBox.Api.Data.Mappings;
using HouseToolBox.Api.DataExtensions;
using HouseToolBox.Api.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace HouseToolBox.Api.Data
{
    public class HouseToolBoxContext : DbContext
    {
        public HouseToolBoxContext(DbContextOptions options) : base(options)
        {
        }

        protected HouseToolBoxContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.AddConfiguration(new ProductMapping());
            modelBuilder.AddConfiguration(new OrderMapping());
            modelBuilder.AddConfiguration(new TagMapping());
            modelBuilder.AddConfiguration(new ProductTagMapping());
            modelBuilder.AddConfiguration(new SellerMapping());
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<ProductTag> ProductTags { get; set; }
    }
}