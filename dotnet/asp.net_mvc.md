# ASP.NET MVC

> **Purpose:** Core ASP.NET MVC interview notes — Visual Studio templates, .NET Framework vs .NET Core, the MVC life cycle, Razor, routing, and state-passing options (ViewBag / ViewData / TempData / Session).

## Visual Studio

### Templates

- Console App (.NET Framework, .NET Core).
- ASP.NET Web Application (.NET Framework, .NET Core).
- Class Library (.NET Framework, .NET Core).
- xUnit Test Project (.NET Core).
- SQL Server Database Project (.NET Framework).

---

## .NET (Framework / Core)

### What is .NET Framework?

> ".NET application development platform that runs only on Windows."

### What is .NET Core?

> "New open-source and cross-platform .NET application development platform."

.NET Core is:

- Multi-platform.
- Open Source.
- Modular.
- Highest performance.
- Installable at different levels (team/app/user).
- Usable with other IDEs.
- Compatible with different processors (x64, x86, ARM).

---

## ASP.NET MVC

### What is ASP.NET MVC?

> "ASP.NET MVC is a web application framework that implements the Model-View-Controller (MVC) pattern."
>
> "MVC architecture pattern: separation of responsibilities between the data access, business logic, and user interface layers — facilitating testing, maintenance, and evolution."

### ASP.NET MVC Life Cycle

> "The ASP.NET Core MVC Request Life Cycle is a sequence of events, stages, or components that interact with each other to process an HTTP request and generate a response that goes back to the client."

### AJAX

> "Asynchronous JavaScript and XML. AJAX is the use of the [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object to exchange data with servers and update parts of a web page — without reloading the whole page."

### jQuery and AJAX

> "jQuery provides several methods for AJAX functionality. With the jQuery AJAX methods, you can request text, HTML, XML, or JSON from a remote server using both HTTP Get and HTTP Post — and you can load the external data directly into the selected HTML elements of your web page."

```html
<button type="button" onclick="loadDoc()">Change</button>
```

```javascript
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  // ...
}
```

### Razor Engine

- To Prepare

### Razor Pages

> "A page that allows combining C# logic with HTML markup, generating .cshtml files."

```razor
<!-- Single statement block -->
@{ var myMessage = "Hello World"; }

<!-- Inline expression or variable -->
<p>The value of myMessage is: @myMessage</p>
```

### ViewModel in MVC

Transforms the model (data and functions) into a representation for the view.

### Routing in MVC

**Routing associates an HTTP call (request) with an action within a controller.**

### Actions in MVC

**Actions** are the methods in the Controller that return a view, redirect to other actions, or return JSON data.

### Scaffold Templates in MVC

**Scaffolding:** automatic code generation from a domain model following the MVC pattern.

### ViewModel vs DTO

- To Prepare

### ViewBag vs ViewData vs TempData vs Session in MVC

> "ViewData and ViewBag help us transfer data from controller to view during a request. TempData also works during the current and subsequent requests."

#### ViewBag

- It is a dynamic object type.

#### ViewData

- It is a Key-Value dictionary collection. Faster than ViewBag.

#### TempData

- It is a Key-Value dictionary collection.
- It is used to transfer data from view to controller, controller to view, or from one action method to another action method of the same or a different controller.
- TempData stores the data temporarily and automatically removes it after retrieving a value.

#### Session

- To Prepare

### PartialView in MVC

> "A .cshtml file that is used to break large markup files into smaller, reusable components across multiple views."

### HTML Helpers in MVC

Methods that generate HTML code in views:

```razor
@Html.TextBox
@Html.DropdownList
```
