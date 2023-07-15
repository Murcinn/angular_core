using Insig.Common.CQRS;

namespace Insig.PublishedLanguage.Commands;

public class AddRestaurantCommand : ICommand
{
    public string Name { get; set; }
    public string Location { get; set; }
    public int Star { get; set; }
    public double AveragePrice { get; set; }
    public string CouniseType { get; set; }
    public bool Delivery { get; set; }
}