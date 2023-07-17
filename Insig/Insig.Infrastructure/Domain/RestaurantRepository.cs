﻿using System.Linq;
using EnsureThat;
using Insig.ApplicationServices.Boundaries;
using Insig.Common.Exceptions;
using Insig.Domain.Restaurants;
using Insig.Infrastructure.DataModel.Context;

namespace Insig.Infrastructure.Domain;

public class RestaurantRepository : IRestaurantRepository
{
    private readonly InsigContext _context;

    public RestaurantRepository(InsigContext context)
    {
        EnsureArg.IsNotNull(context, nameof(context));
        _context = context;
    }

    public void EnsureThatRestaurantDoesNotExist(string name)
    {
        //var restaurant = _context.Restaurants.FirstOrDefault(r => r.Name == name);
        //if (restaurant != null)
        //{
        //    throw new DomainException($"Provided restaurant name: \"{name}\" already exist.");
        //}
    }

    public void Store(Restaurant restaurant)
    {
        _context.Restaurants.Add(restaurant);
    }
}
