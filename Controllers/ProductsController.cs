using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarehouseManager.Data;
using WarehouseManager.Model;
using WarehouseManager.Models;
using WarehouseManager.ViewModel;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WarehouseManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        private readonly ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductViewModel>>> GetProducts()
        {
            return await _context.Products
                .Select(x => new ProductViewModel { Id = x.Id, Capacity = x.Capacity, Quantity = x.Quantity })
                .ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<ProductViewModel>> AddProducts(ProductCreateRequest productCreateRequest)
        {
            if (productCreateRequest.Capacity <= 0)
            {
                return BadRequest("Not Positive Quantity");
            }

            if (productCreateRequest.Capacity < productCreateRequest.Quantity)
            {
                return BadRequest("Quantity Too Low");
            }

            var product = new Product
            {
                Capacity = productCreateRequest.Capacity,
                Quantity = productCreateRequest.Quantity
            };

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut("SetCapacity/{id}")]
        public async Task<ActionResult> SetProductCapacity(int id, ProductCreateRequest productCreateRequest)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound("Product not found");
            }

            if (productCreateRequest.Capacity <= 0)
            {
                return BadRequest("Not Positive Quantity");
            }

            if (productCreateRequest.Capacity < product.Quantity)
            {
                return BadRequest("Quantity Too Low");
            }

            product.Capacity = productCreateRequest.Capacity;
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut("Receive/{id}")]
        public async Task<ActionResult> ReceiveProduct(int id, ProductCreateRequest productCreateRequest)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            if (productCreateRequest.Quantity <= 0)
            {
                return BadRequest("Not Positive Quantity");
            }

            var checkSum = product.Quantity + productCreateRequest.Quantity;
            if (checkSum > product.Capacity)
            {
                return BadRequest("Quantity Too High");
            } 
            else
            {
                product.Quantity = checkSum;
                await _context.SaveChangesAsync();
                return Ok();
            }
        }

        [HttpPut("Dispatch/{id}")]
        public async Task<ActionResult> DispatchProduct(int id, ProductCreateRequest productCreateRequest)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            if(productCreateRequest.Quantity <= 0)
            {
                return BadRequest("Not Positive Quantity");
            }


            var checkDifference = product.Quantity - productCreateRequest.Quantity;
            if (checkDifference < 0)
            {
                return BadRequest("Quantity Too High");                
            }
            else
            {
                product.Quantity = checkDifference;
                await _context.SaveChangesAsync();
                return Ok();
            }
        }

    }
}
