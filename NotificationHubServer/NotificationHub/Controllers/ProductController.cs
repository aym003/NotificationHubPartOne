using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using NotificationHub.Domain.Hubs;
using NotificationHub.Domain.Models;
using NotificationHub.Domain.ProductService;

namespace NotificationHub.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _procutService;

        public ProductController(IProductService procutService, IHubContext<ProductNotificationHub, INotificationHub> productNotification)
        {
            _procutService = procutService;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            return Ok(await _procutService.GetProducts());
        }

        [HttpPut]
        public async Task<IActionResult> UpdateProduct(Product product)
        {
            await _procutService.UpdateProduct(product);

            return Ok();
        }
    }
}
