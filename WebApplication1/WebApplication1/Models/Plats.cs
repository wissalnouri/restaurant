using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Plats
    {
        [Key]
        public int id { get; set; }
        public string nom { get; set; }
        public string prix { get; set; }
        public string image { get; set; }
        public string  description { get; set; }
    }
}
