﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class AuthenticationContext: IdentityDbContext
    {
        public AuthenticationContext(DbContextOptions options):base(options)
        {

        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

    }
}
