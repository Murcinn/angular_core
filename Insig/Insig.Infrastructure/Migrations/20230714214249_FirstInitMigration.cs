using Microsoft.EntityFrameworkCore.Migrations;
using System;

#nullable disable

namespace Insig.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class FirstInitMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Restaurant",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
                    Stars = table.Column<int>(nullable: true),
                    AveragePrice = table.Column<float>(nullable: true),
                    CuisineType = table.Column<string>(nullable: true),
                    Delivery = table.Column<string>(nullable: true),    
                
                    CreatedBy = table.Column<string>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    UpdatedBy = table.Column<string>(nullable: true),
                    UpdatedOn = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Restaurant", x => x.Id);
                });


        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
            name: "Restaurant");

        }
    }
}
