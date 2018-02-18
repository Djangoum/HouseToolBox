using System.Threading.Tasks;

namespace HouseToolBox.Sso.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}