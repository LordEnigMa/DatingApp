using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDTO
{
    [Required]
    public required string Username { set; get; }
    [Required]
    public required string Password { set; get; }
}
