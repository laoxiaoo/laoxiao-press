---
title: Mockito

---

# Junit

## 测试方法命名

一般命名为

被测试方法_测试目的__返回值

如： 

```java
void login_pass_returnToken() {
    
}
```

## 单元测试与集成测试

### 单元测试

一个方法就是一个单元

针对这个方法测试，就是单元测试

*一般来说，单元测试不需要加载其他环境（隔离了运行环境），比如springboot/ 数据库等*

### 集成测试

如果说，一个测试方法里，依赖了多个方法的测试，

那么对这个方法测试，叫做集成测试

### 结合

如果说我们遇到一个方法，里面调用了很多子方法，比如查询数据库，此时，我们可以采用，先测试子方法（单元测试）
对父方法测试得时候，我们可以将子方法mock 返回值（因为前面已经对子方法单元测试了）

# 相关文档

[Mockito 教程 | Baeldung中文网](https://www.baeldung-cn.com/mockito-series)

# Mockito基本使用

```java
private AccountDao accountDao;

private HttpServletRequest request;

private LoginController loginController;

@Before
public void before() {
    //提供两个mock对象
    this.accountDao = Mockito.mock(AccountDao.class);
    this.request = Mockito.mock(HttpServletRequest.class);
    loginController = new LoginController();
}


@Test
public void test() {
    Mockito.when(accountDao.getAccount()).thenReturn("laoxioa");
    //当调用getparameter时返回的值
 	Mockito.when(request.getParameter("username")).thenReturn("admin");
    String login = loginController.login(request);
    System.out.println(login);
    System.out.println(accountDao.getAccount());
}
```

*Mockito.when(accountDao.getAccount())*：

如果调用<b id="blue">getAccount</b>方法则返回<b id="blue">thenReturn</b>内容  

## 构建mock类

1. 为<b id="gray">accountDao</b>构造一个虚拟对象（mock对象）

```java
@Before
public void before() {
    //提供两个mock对象
    this.accountDao = Mockito.mock(AccountDao.class);
    this.request = Mockito.mock(HttpServletRequest.class);
    loginController = new LoginController();
}
```

## stub存根

在调用某个方法的时候，调用真是的方法，而调用mock对象的存根方法

> 基础使用

```java
@Test
public void test() {
    Mockito.when(accountDao.getAccount()).thenReturn("laoxioa");
    //当调用getparameter时返回的值
 	Mockito.when(request.getParameter("username")).thenReturn("admin");
    String login = loginController.login(request);
    System.out.println(login);
    System.out.println(accountDao.getAccount());
}
```

>  多次调用返回多种结果
>
> `当第一次和第二次和第三次调用时，调用返回结果不同`

```java
@Test
public void iterateSub() {
    Mockito.when(list.get(0)).thenReturn(0).thenReturn(1).thenReturn(2);
    System.out.println(list.get(0));
    System.out.println(list.get(0));
    System.out.println(list.get(0));
}
```

>   调用真正的方法，而不调用mock的代理方法

当调用<b id="gray">getDeep2</b>方法时，因为<b id="blue">thenCallRealMethod</b>的原因，会调用真实的deepService1方法，而不调用mock的存根方法

```java
@Test
public void subbingRealMethod() {
    Mockito.when(deepService1.getDeep2()).thenCallRealMethod();
    System.out.println(deepService1.getDeep2());
}
```

## Spy

spy也是对目标对象进行mock，但是只有设置了stub的方法才会mock，其他方法直接调用目标对象本身的方法

比如说：一个类有N个方法， 在Spy场景中，如果不进行设置stub，则就会真实调用

如：当<b id="blue">list.get(1)</b>没有stub时，则返回的是test1,如果stub了返回的是spy1

```
List realList = new ArrayList();
List list = Mockito.spy(realList);
list.add("test1");
list.add("test2");
System.out.println(list.get(0));

Mockito.when(list.get(1)).thenReturn("spy1");
System.out.println(list.get(1));
```

## Mock方式调用真实方法

我们知道，在Mock的方式下，被Mock的类是不会调用真实方法的，如果想要调用，可以使用<b id="blue">thenCallRealMethod</b>的方式

```java
when(thirdPreparePaymentService.receiveOaApproveData(any()))
        .thenCallRealMethod();
```

如果我们的方法没有返回值，上面的方法就会有问题(如果有返回值，就用上面的方式)，可以如下操作

```java
doCallRealMethod().when(thirdPreparePaymentService).syncStatusOnTaskExecuteFail(any(), any(), any());
```

## 不调用某个方法

> 如果在执行一些列代码中，我们想不调用某个方法，比如这个方法是调用第三方接口，我在测试的过程中不想调用
>
> 如下， 调用save方法，实际上不调用save

```java
doReturn(true)
    .when(userRelationService)
    .saveUserRelations(any(List.class), any(Integer.class));
```

## 对入参进行校验

> 调用某个方法，不需要执行，只需要校验下入参是否满足要求

```java
verify(userRelationService).saveUserRelations(
    argThat(relations -> {
        // 自定义校验条件：列表中存在用户ID为U1002、关系类型为friend的记录
        return relations.stream()
            .anyMatch(rel -> "U1002".equals(rel.getUserId()) && "friend".equals(rel.getRelationType()));
    }),
```

## 参数匹配

`any()`‌ - 匹配任何类型的参数。

`eq()`‌ - 匹配等于某个值的参数。

## verify

### 验证调用次数

```java
List<String> mockedList = mock(MyList.class);
mockedList.size();
// 验证 size() 方法是否被调用了 1 次
verify(mockedList, times(1)).size();
```

### 验证返回值

```java
List<PurOaCallbackTask> purOaCallbackTasks = verify(purOaCallbackTaskService).listPendingTasks(eq(100), anyString());
Assertions.assertTrue(CollectionUtils.isEmpty(purOaCallbackTasks));
```

# 注解方式

## @ExtendWith

### 核心作用

1. 为测试添加**自定义能力**（如依赖注入、参数化、Mock、生命周期扩展）
2. 是 JUnit 5 所有扩展的**统一入口**
3. 可同时加载**多个扩展**，用逗号分隔

```java
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

// 启用 Mockito 扩展
@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    // 可以直接使用 @Mock @InjectMocks
    @Mock
    private UserRepository userRepository;
}
```





## @Mock

相当于<b id="blue">Mockito.mock(AccountDao.class)</b>，创建一个mock对象，如下:

```java
 @Mock
private AccountDao accountDao;

@Before
public void init () {
    //如果使用注解，则需要初始化
    MockitoAnnotations.initMocks(this);
}

@Test
public void test() {
    System.out.println(accountDao.getAccount());
}
```

## @Spy

相当于<b id="blue">Mockito.spy</b>

如：

```java
@Spy
private List list = new ArrayList<>();

@Before
public void init() {
    MockitoAnnotations.initMocks(this);
}
```

等同于

```java
List realList = new ArrayList();
List list = Mockito.spy(realList);
```

## @InjectMocks

### 单独使用

 如果使用InjectMocks，则 <b id="blue">@Mock</b>或者<b id="blue">@Spy</b>的对象会注入属性中

如：

1. 定义一个service

```
public class UserServiceImpl implements IUserService {
    private UserManager userManager;
    @Override
    public String getUser() {
        return userManager.getRemoteUser();
    }
}
```

2. 调用<b id="gray">userService.getUser()</b>时访问的是mock对象

```java
@Mock
private UserManager userManager;

@InjectMocks
private UserServiceImpl userService;
```

### 配合spring使用

1. 定义一个service，注意，UserServiceImpl是加入了容器中的

```java
@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserManager userManager;
    @Override
    public String getUser() {
        return userManager.getRemoteUser();
    }
}
```

2. <b id="blue">InjectMocks</b>配合<b id="blue">Autowired</b>使用，当<b id="gray">UserServiceImpl</b>没有mock对象时，则使用spring容器中的对象注入

```java
@Spy
private UserManager userManager = new UserManagerSpy();

@InjectMocks
@Autowired
private UserServiceImpl userService;
```



# 断言

包：`import static org.junit.jupiter.api.Assertions.*;`

```java
// 判断相等
assertEquals(预期值, 实际值);
assertEquals(10, num);

// 判断不相等
assertNotEquals(10, num);

// 判断为 true
assertTrue(条件);
assertTrue(num > 5);

// 判断为 false
assertFalse(条件);

// 判断为空
assertNull(obj);

// 判断非空
assertNotNull(obj);
```



# Spring环境接入

## @SpyBean

等同于@Spy已换bean

使用@MockBean替换Spring上下文中的Bean（这样会导致Spring上下文重启）

```java
@SpyBean
private DeepService deepService;

@Test
public void getUserInfo() {
    Mockito.when(deepService.getDeep(Mockito.any())).then(var -> "test spy");
    System.out.println(userService.getUser());
}
```

与使用`@MockBean`不同，上节中调用`doReturn("").when(testService).doSomething()` 时`doSomething`方法被打桩。而`when(testService.doSomething()).thenReturn("")`则达不到此效果。原因是：使用`@SpyBean`修饰的`testService`是一个真实对象，所以`testService.doSomething()`会被真实调用

即：**SpyBean会调用一下真实的方法**

## @MockBean

等同于@mock替换spring的bean



## 场景验证

假定有：

```java
@FeignClient(value = "isrm-sup-provider", fallbackFactory = SupplierRemoteServiceImpl.class)

public interface SupplierRemoteService
```

```java
@FeignClient(value = "isrm-sup-provider", fallbackFactory = SupplierCompanyRemoteServiceImpl.class)

public interface SupplierCompanyRemoteService，SupplierCompanyRemoteService
```



SupplierCompanyRemoteService 这个访问是正常访问远程地址，但是SupplierRemoteService 则使用http://127.0.0.1:19012这个地址来访问

> 实现代码:

1. @MockBean 会完全覆盖 Bean，导致所有方法默认返回 null。而 @SpyBean 包装了现有的 Bean（例如 LoadBalancerFeignClient ），默认保留其所有功能。
2. 我们使用 Mockito 的 doAnswer 来动态拦截请求。argThat(request -> ...) 用于区分是哪个接口发起的请求。由于 Request 对象不直接包含接口类信息，我们通常通过 URL 中的 路径特征 （如 /supplier ）来判断。
3. Client directClient = new Client.Default(...)

   - 在 doAnswer 内部，我们不能再次调用 feignClient.execute ，否则可能会陷入递归或者再次触发负载均衡逻辑（而 127.0.0.1 不是服务名，过负载均衡器可能会报错）。
   - 因此，我们实例化一个原生的 Client.Default （这是 Feign 自带的基础 HTTP 客户端），专门用来发送在这个测试中被强制重定向的请求。

```java
@SpringBootTest
class FeignRedirectTest {

    // 1. 使用 @SpyBean 而不是 @MockBean
    // 这样对于未被 Stub (桩) 的调用，会自动执行真实逻辑（即 SupplierCompanyRemoteService 的正常访问）
    @SpyBean
    private Client feignClient;

    @Autowired
    private SupplierRemoteService supplierRemoteService;

    @Autowired
    private SupplierCompanyRemoteService supplierCompanyRemoteService;

    @Test
    void testSpecificRedirect() throws IOException {
        // 创建一个原始的 Feign Client 用于发起重定向后的直连请求
        // (避免再次通过 LoadBalancerClient，因为我们已经有了确定的 IP:Port)
        Client directClient = new Client.Default(null, null);

        // 2. 定义拦截逻辑
        // 假设 SupplierRemoteService 的接口路径中包含 "/supplier/" 这样的特征
        // 你需要根据实际代码中的 @RequestMapping 路径来修改这个匹配规则
        String targetPathIdentifier = "/supplier/"; 

        doAnswer(invocation -> {
            Request originalRequest = invocation.getArgument(0);
            Request.Options options = invocation.getArgument(1);

            String url = originalRequest.url();
            System.out.println("拦截到请求: " + url);

            // 3. 构建新的 URL，替换服务名为本地地址
            // 原始 URL 可能是 "http://isrm-sup-provider/supplier/..."
            // 我们将其替换为 "http://127.0.0.1:19012/supplier/..."
            // 注意：如果使用了 Ribbon/LoadBalancer，这里的 URL host 通常是服务名
            String newUrl = url.replace("isrm-sup-provider", "127.0.0.1:19012");
            
            // 确保协议是 http (防止原始 url 只有 path)
            if (!newUrl.startsWith("http")) {
                newUrl = "http://127.0.0.1:19012" + url;
            }

            // 4. 创建新请求对象
            Request newRequest = Request.create(
                    originalRequest.httpMethod(),
                    newUrl,
                    originalRequest.headers(),
                    originalRequest.body(),
                    originalRequest.charset(),
                    originalRequest.requestTemplate()
            );

            // 5. 使用直连 Client 发起请求
            return directClient.execute(newRequest, options);

        }).when(feignClient).execute(
                // 仅匹配 SupplierRemoteService 的请求路径
                argThat(request -> request.url().contains(targetPathIdentifier)), 
                any()
        );

        // --- 验证 ---

        // 场景 A: SupplierRemoteService 应该被重定向到 127.0.0.1:19012
        // 前提：确保你本地 19012 端口有服务（如 WireMock），否则这里会报 Connection Refused
        try {
            supplierRemoteService.someMethod(); 
        } catch (Exception e) {
            // 如果本地没有起服务，这里报错是正常的，但可以看日志确认 URL 是否已变
            System.out.println("SupplierRemoteService 调用结束: " + e.getMessage());
        }
        // 场景 B: SupplierCompanyRemoteService 应该走正常逻辑 (SpyBean 的默认行为)
        // 它会继续使用原始的 feignClient (通常是 LoadBalancerFeignClient)
        try {
            supplierCompanyRemoteService.someOtherMethod();
        } catch (Exception e) {
            System.out.println("SupplierCompanyRemoteService 调用结束: " + e.getMessage());
        }
    }
}
```

> 为什么要使用：Client directClient = new Client.Default(null, null)方法，进行directClient.execute(newRequest, options)直连调用

从 [feign源码跟踪](/java/springcloud/3-restful?id=feign源码跟踪 )可以看到，通过LoadBalancerFeignClient#execute方法，进行lbClient的负载均衡调用，这里直接使用Client 就是为了避免再次进入mockito拦截的execute方法循环调用了



# SpringMVC测试

1. 以注解WebMvcTest来标识需要测试得controller

2. 可以使用import注解来将对象注入spring容器
3. 从容器中取出MockMvc来进行模拟http调用

```java
@WebMvcTest(value = {LoginController.class})
@Import(DeepServiceImpl.class)
public class LoginControllerTest {

    @Autowired
    private MockMvc mockMvc;



    @Test
    public void login_adminLogin_returnPass() throws Exception {
        mockMvc.perform(
                        MockMvcRequestBuilders.post("/login") // 你的接口路径（必须和@RequestMapping匹配）
                                .param("username", "admin") // 传入参数
                )
                .andExpect(view().name("500")); // 断言返回视图是 500
    }
}
```



# 仓储层的测试

1. 作为测试用例得数据库，一般来说，是需要与业务数据库隔离的
2. 作为仓储层得测试，因为与外界产生了关联，所以已不属于单元测试范围，已属于集成测试的范围



# SpringBootTest

1. 一般来说，我们反对使用这个注解，因为这个注解，会加载整个项目，单元测试的成本会特别得高
2. 比如我们的环境成本：redis、数据库、依赖接口等，清理后期产生的数据等
3. 为什么还要使用它呢？
   1. 他可以做全流程的接口测试

###  WebTestClient vs MockMvc 对比

如果项目传统 是 Spring MVC，不是 WebFlux，建议使用 MockMvc，否则会有兼容问题

| 特性     | MockMvc                  | WebTestClient                          |
| -------- | ------------------------ | -------------------------------------- |
| 模块     | spring-test              | spring-webflux-test                    |
| 风格     | 流式 API，同步调用       | 流式 API，支持响应式                   |
| 适用场景 | 传统 Spring MVC          | Spring MVC + WebFlux                   |
| 断言方式 | andExpect/andDo          | expectBody/expectStatus                |
| 依赖     | spring-boot-starter-test | 需额外添加 spring-boot-starter-webflux |

 实现方案

 1. 添加依赖 (pom.xml)

 在 isrm-pur/isrm-pur-base/isrm-pur-starter/pom.xml 中添加：

```xml

 <dependency>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-webflux</artifactId>
     <scope>test</scope>
 </dependency>

```

 2. WebTestClient 使用示例

 ```java
 
 // GET 请求
 webTestClient.get()
     .uri("/api/users/{id}", "123")
     .exchange()
     .expectStatus().isOk()
     .expectBody()
     .jsonPath("$.name").isEqualTo("张三");

 // POST 请求
 webTestClient.post()
     .uri("/api/users")
     .contentType(MediaType.APPLICATION_JSON)
     .bodyValue(userParam)
     .exchange()
     .expectStatus().isOk()
     .expectBody(User.class)
     .value(user -> {
         assertEquals("张三", user.getName());
     });

 // 验证返回 JSON
 webTestClient.post()
     .uri("/payment/plan/queryPage")
     .contentType(MediaType.APPLICATION_JSON)
     .bodyValue(requestJson)
     .exchange()
     .expectStatus().isOk()
     .expectBody()
     .jsonPath("$.code").isEqualTo(200)
     .jsonPath("$.data.list").isNotEmpty();
 
 ```

## MockMVC

```java
@Test
public void testGetPaymentPlanInvoiceApplyDefault() throws Exception {
    String json = "{\n" +
            "    \"companyId\": \"1\",\n" +
            "    \"supplierId\": \"SUP001\",\n" +
            "    \"storeHouseCode\": \"WH001\",\n" +
            "    \"businessPersonCodes\": [\"EMP001\"]\n" +
            "}";

    MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post("/payment/plan/getPaymentPlanInvoiceApply")
            .contentType(MediaType.APPLICATION_JSON)
            .content(json))
            .andExpect(status().isOk())
            .andReturn();
    log.info(formatJson(mvcResult.getResponse().getContentAsString()));
}
```

# TDD

## 基础概念

### 重构and测试

1. 我们在面对一段代码的重构时，往往可能改完，这里有问题哪里有问题
2. 编写了测试用例，我们可以改一小段代码，运行测试用例，这样，能避免最小维度得调整导致问题



### 红-绿-重构三部曲

> 什么是红绿重构

1. 比如我们遇到一个代码，我们需要重构他，我们可以每一小步得修改代码，都经历如下
   1. 先运行一个不通过得测试用例，运行不通过
   2. 然后我们再改写代码，让测试用例变得通过为止

## 测试先行

> 在编写功能代码之前，先编写测试代码
>
> 1. 在编写一个逻辑之前，我们确认这个原有方法得输入输出，得到改变这个逻辑之后的输出为什么
> 1. 如果遇到没有定义得方法和属性，可以先定义一个空方法，对空方法里面得内容先补充单元测试后，再补充调用这个方法的方法的单元测试
> 2. 编写测试用例，传入参数，此时输出得参数肯定不会满足逻辑（红）
> 3. 调整方法得逻辑，运行测试用例，要求能够满足测试用例得运行（绿）
> 4. 再对方法进行重构



1. 写测试

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
class CalculatorTest {
    @Test
    void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.add(2, 3));
    }
}
```

2. 如果遇到一个方法需要调用另一个方法,此时，B还没有定义，需先定义B方法的空方法，然后先对B方法进行单元测试，再对A方法补充调用B的单元测试

```java
void A() {
    B();
}
```



2. 写功能代码

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

步骤 3：重构

```java
public class Calculator {
    public int add(int a, int b) {
        return Math.addExact(a, b);
    }
}
```

## 明确测试目标

我们在测试一个方法得时候

真实得场景可能是：一个方法里很多个if逻辑，有多个方法调用，那么这些方法我们需不需要测试呢

所以此时，我们需要明确我们本次调整需要测试得方法

比如：遇到代码

```java
if(a) {

	A()

} eles {

	B()

}
```

此时，我们需要针对这两个逻辑，分别编写不同得测试用例

## 集成测试得必要性

如果单元测试通过后

必须进行集成测试

如E2E的测试，以防止各个单元组合后，产生的未预见问题，比如时序性问题

# 测试方法命名

1. 要测试得内容
2. 在什么场景进行测试（当发生什么时候，进行测试）
3. 期望得到得结果值


转换为代码为

```java
@Test
void 内容_场景_结果() {
    
}
```

# 测试方法体

1. 做好准备工作
   1. 打桩（如果调用啥，返回啥）
   2. mock 数据
2. 调用目标方法
3. 断言目标值

# 好的测试要求

1. 测试用例一定要可读性好
2. 测试用例不健全
   1. 比如：某个场景没有考虑到
   2. 我们一定要了解测试代码得根本逻辑，对这个根本逻辑可能性进行测试
   3. 如果单元测试代码里面有条件判断，一定要注意，这些条件判断是否满足所有得场景

# CQS原则

> 命令查询分离

**Command（命令）**：**改变系统状态**（有副作用），**不返回数据**（或仅返回成功 / 失败状态、新实体 ID 等极简元数据）。

- 示例：`user.updateName("Tom")`、`order.create()`、`inventory.reduceStock(10)`

**Query（查询）**：**不改变系统状态**（无副作用、引用透明），**仅返回数据**。

- 示例：`user.getName()`、`order.getTotal()`、`inventory.getStock()` 

> 即，我们一套组合方法里面，如果有查询和命令，则必须分离开

比如：

```java
void doSome() {
    selectA();
    updateA();
    updateB();
}
```

我们需要改为

```java
void doSome() {
    selectA();
    update();
}
void update() {
    updateA();
    updateB();
}
```

