# ASP.NET MVC — Extended Q&A

> **Purpose:** Extended ASP.NET MVC interview questions and answers. Covers MVC fundamentals, routing, action filters, view engines, Razor, and advanced features. Original question numbering preserved (questions 4, 5, 24, 66, 70, and 71 are missing from the source).

## Part 1 — MVC Fundamentals

### 1. What is MVC?

MVC is a **methodology** that divides the implementation of an application into three component roles: models, views, and controllers.

**Main components of an MVC application:**

- M – Model
- V – View
- C – Controller

**Models** in an MVC-based application are the components responsible for maintaining state. Often this state is persisted inside a database (for example: we might have a Product class used to represent order data from the Products table in SQL).

**Views** in an MVC-based application are the components responsible for displaying the application's user interface. Typically this user interface is created from the model data (for example: we might create an "Edit" view for a product that renders text boxes, drop-down menus, and check boxes based on the current state of a Product object).

**Controllers** in an MVC-based application are the components responsible for handling end-user interaction, manipulating the model, and ultimately choosing a view to render in order to display the user interface. In an MVC application the view is only about displaying information: it is the controller that handles and responds to user input and interaction.

### 2. What do Model, View, and Controller represent in an MVC application?

**Model:** the model represents the application's data domain. In short, the application's business logic is contained in the model.

**View:** views represent the user interface that end users interact with. In short, all user-interface logic is contained in the view.

**Controller:** the controller is the component that responds to user actions. Based on the user's actions, the respective controller works with the model and selects a view to render that displays the user interface. The user-input logic is included in the controller.

### 3. In which assembly is the MVC framework defined?

System.Web.Mvc

### 6. What is the Razor View Engine?

The Razor view engine is a new view engine created with [ASP.NET](http://asp.net/) MVC through the Razor parser, specially designed to render HTML from dynamic server-side code. It allows us to write compact, expressive, clean, and fluid code with a new syntax for including server-side code in HTML.

### 7. What are the advantages of ASP.NET MVC?

1. Extensive TDD support. With ASP.NET MVC, views can also be easily unit tested.
2. Complex applications can be managed easily.
3. Separation of Concerns (SoC). Different aspects of the application can be divided into model, view, and controller.
4. ASP.NET MVC views are lightweight, since they do not use ViewState.

### 8. Is it possible to unit test an MVC application without running the controllers in an ASP.NET process?

Yes. All the features of an ASP.NET MVC application are interface-based, so mocking is much easier. Therefore, we do not have to run the controllers in an ASP.NET process for unit testing.

### 9. What is the ASP.NET MVC namespace?

ASP.NET MVC classes and namespaces are located in the System.Web.Mvc assembly.

**System.Web.Mvc**

Contains classes and interfaces that support the MVC pattern for ASP.NET web applications. This namespace includes classes that represent controllers, controller factories, action results, views, partial views, and model binders.

**System.Web.Mvc.Ajax**

Contains classes that support Ajax scripts in an ASP.NET MVC application. The namespace includes support for Ajax scripts and Ajax option configuration.

**System.Web.Mvc.Async**

Contains classes and interfaces that support asynchronous actions in an ASP.NET MVC application.

**System.Web.Mvc.Html**

Contains classes that help render HTML controls in an MVC application. The namespace includes classes that support forms, input controls, links, partial views, and validation.

### 10. Is it possible to share a view across multiple controllers?

**Yes.** Place the view in the Shared folder. This will automatically make the view available to multiple controllers.

### 11. What is the role of a controller in an MVC application?

The controller responds to user interactions with the application, selecting the action method to execute and selecting the view to render.

---

## Part 2 — Routing

### 12. Where are routing rules defined in an ASP.NET MVC application?

In the Application_Start event in Global.asax.

### 13. Name a few different return types of a controller action method

The following are just a few return types of a controller action method. In general, an action method can return an instance of any class that derives from the ActionResult class.

1. ViewResult
2. JavaScriptResult
3. RedirectResult
4. ContentResult
5. JsonResult

### 14. What is the "page life cycle" of an ASP.NET MVC application?

An ASP.NET MVC page performs the following process:

1. Application initialization.
2. Routing.
3. Instantiate and execute the controller.
4. Locate and invoke the controller action.
5. Instantiate and render the view.

### 15. What is the significance of NonActionAttribute?

In general, all public methods of a controller class are treated as action methods. If you want to prevent this default behavior, simply decorate the public method with **NonActionAttribute**.

### 16. What is the significance of ASP.NET routing?

ASP.NET MVC uses ASP.NET routing to map incoming browser requests to controller action methods. ASP.NET Routing makes use of the route table. The route table is created when the web application starts for the first time. The route table is present in the Global.asax file.

### 17. How is the route table created in ASP.NET MVC?

When an MVC application starts for the first time, the Application_Start() method is called. This method, in turn, calls the RegisterRoutes() method. The RegisterRoutes() method creates the route table.

### 18. What are the 3 segments of the default route present in an ASP.NET MVC application?

- 1st segment — controller name.
- 2nd segment — action method name.
- 3rd segment — parameter passed to the action method.

**Example:** <http://google.com/search/label/MVC>

- Controller name: search.
- Action method name: label.
- Parameter id: MVC.

### 19. An ASP.NET MVC application makes use of settings in 2 places for routing to work correctly. What are these 2 places?

1. **Web.Config file:** ASP.NET routing has to be enabled here.
2. **Global.asax file:** the route table is created in the Application_Start event handler of the Global.asax file.

### 20. What is the advantage of using ASP.NET routing?

In an ASP.NET web application that does not use routing, an incoming browser request must map to a physical file. If the file does not exist, we get a "page not found" error.

An ASP.NET web application that uses routing works with URLs that do not have to map to specific files on a website. Since the URL does not have to map to a file, you can use URLs that are descriptive of the user's action and therefore easier for users to understand.

### 21. What are the 3 things needed to specify a route?

1. **URL pattern:** you can include placeholders in a URL pattern so that variable data can be passed to the request handler without requiring a query string.
2. **Handler:** the handler can be a physical file, such as an .aspx file, or a controller class.
3. **Route name:** the name is optional.

### 22. Is the following route definition a valid route definition?

**Example:** `{controller}{action}`

**No.** The definition above is not a valid route definition, because there is no literal value or delimiter between the placeholders. Therefore, routing cannot determine where to separate the controller placeholder value from the action placeholder value.

### 23. What is the use of the following default route?

`{resource}.axd/{*pathInfo}`

This route definition prevents requests for web resource files such as WebResource.axd or ScriptResource.axd from being passed to a controller.

### 25. How is a variable number of segments handled in a route definition?

Use a route with a catch-all parameter. An example is shown below. `*` is known as the catch-all parameter.

`controller/{action}/{*parametervalues}`

### 26. What are the 2 ways of adding constraints to a route?

1. Use regular expressions.
2. Use an object that implements the IRouteConstraint interface.

### 27. Give 2 examples of scenarios where routing is not applied

1. A physical file is found that matches the URL pattern — this default behavior can be overridden by setting the RouteExistingFiles property of the RouteCollection object to true.
2. Routing is explicitly disabled for a URL pattern — use the RouteCollection.Ignore() method to prevent routing from handling certain requests.

---

## Part 3 — Action Filters

### 28. What is the use of action filters in an MVC application?

Action filters allow us to add pre-action and post-action behavior to controller action methods.

### 29. If I have multiple filters implemented, what is the order in which these filters execute?

1. Authorization filters.
2. Action filters.
3. Response filters.
4. Exception filters.

### 30. What are the different types of filters in an ASP.NET MVC application?

1. Authorization filters.
2. Action filters.
3. Result filters.
4. Exception filters.

### 31. Give an example of authorization filters in an ASP.NET MVC application

1. RequireHttpsAttribute.
2. AuthorizeAttribute.

### 32. Which filter executes first in an ASP.NET MVC application?

Authorization filter.

### 33. What are the levels at which filters can be applied in an ASP.NET MVC application?

1. Action method.
2. Controller.
3. Application.

### 34. Is it possible to create a custom filter?

Yes.

### 35. Which filters execute at the end?

Exception filters.

### 36. Is it possible to cancel filter execution?

Yes.

### 37. What type of filter does the OutputCacheAttribute class represent?

Result filter.

---

## Part 4 — View Engines & Razor

### 38. What are the 2 popular ASP.NET MVC view engines?

1. Razor.
2. .aspx.

### 39. What is the difference between ViewBag and ViewData in ASP.NET MVC?

The basic difference between ViewData and ViewBag is that in ViewData, instead of creating dynamic properties, we use Model properties to carry the model data into the View, while in ViewBag we can create dynamic properties without using model data.

### 40. What symbol would you use to denote the start of a code block in Razor views?

**@**

### 41. What symbol would you use to denote the start of a code block in ASPX views?

**<% %>**

### 42. When using Razor views, do you have to take any special measures to protect your ASP.NET MVC application from cross-site scripting (XSS) attacks?

**No.** By default, content emitted through an @ block is automatically HTML-encoded to protect it from cross-site scripting (XSS) attacks.

### 43. When using the ASPX view engine, to have a consistent look and feel across all pages of the application, we can make use of ASP.NET master pages. What should we use in the case of Razor views?

- To have a consistent look when using Razor views, we can make use of layout pages.
- Layout pages reside in the Shared folder and are named _Layout.cshtml.

### 44. What are sections?

Layout pages can define sections, which can then be overridden by specific views that make use of the layout. Defining and overriding sections is optional.

### 45. What are the file extensions for Razor views?

1. .cshtml — if the programming language is C#.
2. .vbhtml — if the programming language is VB.

### 46. How are comments specified using Razor syntax?

Razor syntax uses `@*` to mark the start of a comment and `*@` to mark the end.

---

## Part 5 — Advanced Topics

### 47. What is routing?

A route is a URL pattern that is mapped to a handler. The handler can be a physical file, such as an .aspx file in a WebForms application. The routing module is responsible for mapping incoming browser requests to particular MVC controller actions.

### 48. Is it possible to combine ASP.NET WebForms and ASP.NET MVC and develop a single web application?

**Yes**, it is possible to combine ASP.NET WebForms and ASP.NET MVC and develop a single web application.

### 49. How do you avoid XSS vulnerabilities in ASP.NET MVC?

Use the `@` syntax in ASP.NET MVC instead of the `<%= %>` syntax from .NET Framework 4.0.

### 50. Explain the new features added in MVC version 4 (MVC4)

- Mobile templates.
- The ASP.NET Web API template has been added to create REST-based services.
- Support for asynchronous controller tasks.
- Bundling of JavaScript scripts.
- Segregation of configurations for MVC routing, Web API, bundling, etc.

### 51. Can you explain the MVC page life cycle?

Below are the processes followed in sequence:

- Application initialization.
- Routing.
- Instantiate and execute the controller.
- Locate and invoke the controller action.
- Instantiate and render the view.

### 52. What are the advantages of ASP.NET MVC over ASP.NET WebForms?

1. It provides a clean separation of concerns between the user interface (presentation layer), the model (transfer objects / domain objects / entities), and the business logic (controller).
2. Easy unit testing.
3. Improved reuse of the model and views. We can have multiple views that can point to the same model and vice versa.
4. Improved code structuring.

### 53. What is Separation of Concerns (SoC) in ASP.NET MVC?

It is the process of dividing the program into several distinct features that overlap in functionality as little as possible. The MVC pattern is concerned with separating the presentation content from the data-processing content.

### 54. What is the Razor View Engine?

- Razor is the first major update for rendering HTML in MVC3.
- Razor was designed specifically for view-engine syntax. Its main focus is to simplify code-focused templating for HTML generation.

A sample of Razor usage is shown below:

```razor
@model MvcMusicStore.Models.Customer

@{ ViewBag.Title = "Get Customers"; }

@Model.CustomerName
```

### 55. What is the meaning of unobtrusive JavaScript?

This is a general term that conveys a general philosophy, similar to the term REST (Representational State Transfer). Unobtrusive JavaScript does not mix JavaScript code into the page markup.

For example: instead of using events like onclick and onsubmit, unobtrusive JavaScript is attached to elements by their ID or class, based on HTML5 data attributes.

### 56. What is the use of ViewModel in MVC?

ViewModel is a plain class with properties, which is used to bind to a strongly typed view. ViewModel can have validation rules defined for its properties using data annotations.

### 57. What do you mean by routing in MVC?

Routing is a pattern-matching mechanism that matches incoming requests to the URL patterns registered in the route table. The "UrlRoutingModule" class is used for the same process.

### 58. What are actions in MVC?

Actions are the methods of the Controller class that are responsible for returning view or JSON data. The action will mainly have the return type "ActionResult" and will be invoked from the "InvokeAction()" method called by the controller.

### 59. What is attribute routing in MVC?

ASP.NET WEB API supports this type of routing. It is introduced in MVC5. In this type of routing, attributes are used to define the routes. This type of routing provides more control over classic URI routing. Attribute routing can be defined at the controller level or at the action level:

```csharp
[Route("{action = TestCategoryList}")] // Controller Level

[Route("customers/{TestCategoryId:int:min(10)}")] // Action Level
```

### 60. How do you enable attribute routing?

Simply add the "MapMvcAttributeRoutes()" method to enable attribute routing as shown below:

```csharp
public static void RegisterRoutes(RouteCollection routes)
{
    routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

    // enabling attribute routing
    routes.MapMvcAttributeRoutes();

    // convention-based routing
    routes.MapRoute
    (
        name: "Default",
        url: "{controller}/{action}/{id}",
        defaults: new { controller = "Customer", action = "GetCustomerList", id = UrlParameter.Optional }
    );
}
```

### 61. Explain JSON binding

Support for JavaScript Object Notation (JSON) binding started with MVC3 through the new JsonValueProviderFactory, which allows action methods to accept and bind data in JSON format. This is useful in Ajax scenarios such as client templates and data binding that need to post data back to the server.

### 62. Explain dependency resolution

Dependency Resolver was introduced in MVC3 and greatly simplifies the use of dependency injection in applications. This makes it easier to decouple application components, making them easier to test and more configurable.

### 63. Explain BundleConfig in MVC4

"BundleConfig.cs" in MVC4 is used to register bundles through the bundling and minification system. Many bundles are added by default, including jQuery libraries such as jquery.validate, Modernizr, and default CSS references.

### 64. How is the route table created in ASP.NET MVC?

The "RegisterRoutes()" method is used to register the routes, and it is added in the "Application_Start()" method of the global.asax file, which is triggered when the application loads or starts.

### 65. What are the important namespaces used in MVC?

The following are the important namespaces used in MVC:

- System.Web.Mvc
- System.Web.Mvc.Ajax
- System.Web.Mvc.Html
- System.Web.Mvc.Async

---

## Part 6 — ViewData, ViewBag & MVC vs MVP

### 67. What is ViewData?

ViewData contains key-value pairs like a dictionary, and it is derived from the "ViewDataDictionary" class. In the action method we set the ViewData value, and in the view the value is retrieved through type casting.

### 68. What is the difference between ViewBag and ViewData in MVC?

ViewBag is a wrapper around ViewData that allows creating dynamic properties. The advantages of ViewBag over ViewData are:

- In ViewBag there is no need to cast objects as in ViewData.
- ViewBag takes advantage of the dynamic keyword introduced in version 4.0. But before using ViewBag we have to keep in mind that ViewBag is slower than ViewData.

### 69. Can you specify the different types of filters in an ASP.NET MVC application?

1. Authorization filters (IAuthorizationFilter).
2. Action filters (IActionFilter).
3. Result filters (IResultFilter).
4. Exception filters (IExceptionFilter).

### 72. What is the difference between MVC (Model View Controller) and MVP (Model View Presenter)?

- The MVC controller handles all requests.
- In MVP, the presenter acts like a controller and also handles all requests.
