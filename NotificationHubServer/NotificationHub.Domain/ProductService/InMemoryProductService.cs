using Microsoft.AspNetCore.SignalR;
using NotificationHub.Domain.Hubs;
using NotificationHub.Domain.Models;

namespace NotificationHub.Domain.ProductService
{
    public class InMemoryProductService : IProductService
    {

        private readonly IHubContext<ProductNotificationHub, INotificationHub> _productNotification;

        private readonly List<Product> _products;

        public InMemoryProductService(IHubContext<ProductNotificationHub, INotificationHub> hubContext)
        {
            _products = new List<Product>
            {
                new Product
                {
                    ProductId="P01",
                    ProductName="Cool Product",
                    Description="World coolest Product",
                    Price=9.99m,
                    stock=10
                },
                new Product
                {
                    ProductId="P02",
                    ProductName="Cool Expensive Product",
                    Description="World coolest expensive Product",
                    Price=999.99m,
                    stock=0
                }
            };

            _productNotification = hubContext;
        }

        public Task<List<Product>> GetProducts()
        {
            return Task.FromResult(_products);
        }

        public async Task UpdateProduct(Product product)
        {
            var foundProduct = _products.FirstOrDefault(x => x.ProductId == product.ProductId);
            if (foundProduct != null)
            {
                foundProduct.ProductName = product.ProductName;
                foundProduct.Description = product.Description;
                foundProduct.Price = product.Price;
                foundProduct.stock = product.stock;
            }

            await _productNotification.Clients.Group(product.ProductId).SendMessage(new Notification
            {
                ProductID = product.ProductId,
                ProductName = product.ProductName,
                Message = "Product Updated"
            });
        }
    }
}
