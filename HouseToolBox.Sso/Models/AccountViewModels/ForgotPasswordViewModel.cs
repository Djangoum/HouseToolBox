using System.ComponentModel.DataAnnotations;

namespace HouseToolBox.Sso.Models.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}