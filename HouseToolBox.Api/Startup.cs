using HouseToolBox.Api.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.IO;

namespace HouseToolBox.Api
{
    public class Startup
    {
        public Startup()
        {
            var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json");

            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvcCore()
                .AddAuthorization()
                .AddJsonFormatters();

            services.AddAuthentication("Bearer")
                .AddIdentityServerAuthentication(options =>
                {
                    options.Authority = Configuration.GetSection("Authorization").GetValue<string>("Authority");
                    options.RequireHttpsMetadata = false;
                    options.ApiName = Configuration.GetSection("Authorization").GetValue<string>("ApiName");
                });

            services.AddDbContext<HouseToolBoxContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            Data.Module.RegisterModule(services);
            Business.Module.RegisterModule(services);

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(op => op.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials());

            app.UseAuthentication();

            app.UseMvc();
        }
    }
}