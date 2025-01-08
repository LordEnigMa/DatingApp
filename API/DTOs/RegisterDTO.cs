using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDTO
{
    [Required]
    public string Username { set; get; } = string.Empty;
    [Required]
    [StringLength(8, MinimumLength = 4)]
    public string Password { set; get; } = string.Empty;
}
