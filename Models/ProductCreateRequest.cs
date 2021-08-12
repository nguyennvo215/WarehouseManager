using System.ComponentModel.DataAnnotations;

namespace WarehouseManager.Models
{
    public class ProductCreateRequest
    {
        [Required]
        public int Capacity { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}
