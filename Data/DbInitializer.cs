using System.Linq;
using WarehouseManager.Model;

namespace WarehouseManager.Data
{
    public class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();

            if (context.Products.Any())
            {
                return;
            }

            var products = new Product[]
            {
                new Product{Capacity = 20, Quantity = 10},
                new Product{Capacity = 10, Quantity = 5}
            };

            context.Products.AddRange(products);
            context.SaveChanges();            
        }
    }
}
