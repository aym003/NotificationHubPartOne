using Microsoft.AspNetCore.SignalR;

namespace NotificationHub.Domain.Hubs
{
    public class ProductNotificationHub : Hub<INotificationHub>
    {
        public Task SuscribeToProduct(string productId)
        {
            return this.Groups.AddToGroupAsync(Context.ConnectionId, productId);
        }
    }
}
