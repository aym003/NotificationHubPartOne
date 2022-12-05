using NotificationHub.Domain.Models;

namespace NotificationHub.Domain.ProductService
{
    public interface IProductService
    {
        Task<List<Product>> GetProducts();
        Task UpdateProduct(Product product);
    }
}
