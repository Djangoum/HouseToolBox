using System.ComponentModel.DataAnnotations;

namespace HouseToolBox.Sso.Models.AccountViewModels
{
    public class ExternalLoginViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}