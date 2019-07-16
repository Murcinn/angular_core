# Insig project
Template with Angular and Asp.net Core + IdentityServer 4

# Setup
1. Ensure that you have valid Data Source (current: ".\\SQLEXPRESS") in ConnectionString (appsettings.json) in following projects: Insig.Api, Insig.Infrastructure, Insig.IdentityServer

2. Update database migrations ("dotnet ef database update") in following projects: Insig.Infrastructure, Insig.IdentityServer

3. Download npm packages ("npm install") in Insig.Web

4. Build scripts ("ng build --aot") in Insig.Web

5. Set startup projects:
- Insig.IdentityServer
- Insig.Api
- Insig.Web

6. Rebuild solution and start application