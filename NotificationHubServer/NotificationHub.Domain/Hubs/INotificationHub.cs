namespace NotificationHub.Domain.Hubs
{
    public interface INotificationHub
    {
        public Task SendMessage(Notification notification);
    }
}
