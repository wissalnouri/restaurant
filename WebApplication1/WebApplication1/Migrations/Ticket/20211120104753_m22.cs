using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations.Ticket
{
    public partial class m22 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "commande",
                columns: table => new
                {
                    idCommande = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nomUser = table.Column<string>(nullable: true),
                    idPlat = table.Column<int>(nullable: false),
                    dateCommande = table.Column<string>(nullable: true),
                    phoneNumber = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    platsId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_commande", x => x.idCommande);
                    table.ForeignKey(
                        name: "FK_commande_Plats_platsId",
                        column: x => x.platsId,
                        principalTable: "Plats",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_commande_platsId",
                table: "commande",
                column: "platsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "commande");
        }
    }
}
