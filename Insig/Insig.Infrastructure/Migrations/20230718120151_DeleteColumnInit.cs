using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Insig.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class DeleteColumnInit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                table: "Restaurant",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Deleted",
                table: "Restaurant");
        }
    }
}
