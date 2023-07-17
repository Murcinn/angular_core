﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Insig.PublishedLanguage.Dtos
{
    public class RestaurantDTO
    {
        public string Name { get; set; }
        public string Location { get; set; }
        public int Stars { get; set; }
        public double AveragePrice { get; set; }
        public string CuisineType { get; set; }
        public bool Delivery { get; set; }
    }
}
