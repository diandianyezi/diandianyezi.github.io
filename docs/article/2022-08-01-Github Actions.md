---
  title: Github Actions
  date: 2022-08-04
  sidebar: heading
  breadcrumb: true
  lastUpdated: true
  contributors: true
  editLink: false
  category: Github
  tag:
   - Github
---

## 概览

Github Actions 是一个Github 的持续集成和持续交付的服务，可以让构建、测试和部署流程自动化。可以创建一个在每次推送分支的时候构建、测试或部署的工作流。

Github Actions 不仅仅是DevOps，还可以在其他仓库事件发生时执行工作流。



### Github Actions 是什么

持续继承由很多操作组成，如抓取代码、运行测试、编译打包等。这些操作被称为actions。

actions 可以共享，使用 `userName/repoName`可以引用action。

GitHub 做了一个[官方市场](https://github.com/marketplace?type=actions)，可以搜索到他人提交的 actions。另外，还有一个 [awesome actions](https://github.com/sdras/awesome-actions) 的仓库，也可以找到不少 action。

```shell
actions/setup-node@74bc508 # 指向一个 commit
actions/setup-node@v1.0    # 指向一个标签
actions/setup-node@master  # 指向一个分支
```



### Github Actions 组成部分

#### 相关术语

- workflow 工作流：持续集成一次运行的过程，就是一个workflow。
- job 任务：一个workflow由一个或多个jobs构成。
- step 步骤：每个步骤由多个step组成
- action 动作：每个step可以执行一个或多个命令



工作流可以包含一个或者多个 可以按顺序执行或并发执行的任务 jobs。

 Each job will run inside its own virtual machine *runner*, or inside a container, and has one or more *steps* that either run a script that you define or run an *action*, which is a reusable extension that can simplify your workflow.

![image-20220722230450940](https://raw.githubusercontent.com/diandianyezi/typora-images/master/img/202207222304975.png)



#### 工作流 workflow

定义在项目中的 `.github/workflows`文件下的 YAML文件，可以被事件触发或者可以手动触发，也可以是定时的。workflow 文件的配置字段非常多，详见[官方文档](https://help.github.com/en/articles/workflow-syntax-for-github-actions)。

项目可以有多个工作流，Github发现有  `.yml`文件，就会自动运行该文件。 例如，可以创建一个工作流在每次推送分支的时候 进行构建和测试，另一个工作流在生成release分支的时候自动部署。

可以在一个工作流中引用另外一个工作流。see "[Reusing workflows](https://docs.github.com/en/actions/learn-github-actions/reusing-workflows)."

##### 基本字段：

1. `name`: workflow 名称，默认为当前workflow文件名

2. `on`: 指定触发workflow的条件，通常为某些事件，可以为代码库事件，也支持外部事件触发或定时运行。

    ```yml
    on: push
    # 也可以为数组
    on: [push, pull-request]
    
    
    ```

3. `on.<event_name>.types`

    触发 工作流的事件类型

    ```yml
    on:
      label:
        types: [created, edited]
    ```

    

    - `on.<push|pull-request>.<tags|branches>`

        指定触发事件时的分支或标签

        ```yaml
        on:
          push:
            branches:
              - master # filters
        ```

    - `on.schedule`

        定时执行 `workflow`，事件设置采用[POSIX cron syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). The shortest interval you can run scheduled workflows is once every 5 minutes.

4. `jobs.<job_id>.name`

    要执行的一项或多项任务，需要写出 `job_id`，具体名称自定义。name字段是任务的说明

    ```yml
    jobs:
      my_first_job:
        name: My first job
      my_second_job:
        name: My second job
    ```

5. `jobs.<job_id>.needs`

    指定当前任务的依赖关系即运行顺序。

    ```yml
    jobs:
      job1:
      job2:
        needs: job1
      job3:
        needs: [job1, job2]
    ```

    

6. `jobs.<job_id>.runs-on`

    指定运行所需的虚拟机环境，为必填字段。可用的虚拟机如下：

    - `ubuntu-latest`，`ubuntu-18.04`或`ubuntu-16.04`
    - `windows-latest`，`windows-2019`或`windows-2016`
    - `macOS-latest`或`macOS-10.14`

7. `jobs.<job_id>.steps`

    每个job的运行步骤，可以包含一个或多个步骤，每个步骤都可以指定以下三个字段。

    - `jobs.<job_id>.steps.name`：步骤名称
    - `jobs.<job_id>.steps.run`：该步骤运行的命令或者action
    - `jobs.<job_id>.steps.env`：该步骤所需的环境变量

#### Events

可以触发工作流运行的具体活动。You can also trigger a workflow run on a schedule, by [posting to a REST API](https://docs.github.com/en/rest/reference/repos#create-a-repository-dispatch-event), or manually.

Events列表： [Events that trigger workflows](https://docs.github.com/en/actions/reference/events-that-trigger-workflows).



#### Jobs

A job is a set of *steps* in a workflow that execute on the same runner.

每一步 是一个shell脚本或者是一个需要运行的action。

For more information about jobs, see "[Using jobs](https://docs.github.com/en/actions/using-jobs)."



#### Actions

An *action* is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task. 



#### Runners

A runner is a server that runs your workflows when they're triggered.Each runner can run a single job at a time. 

GitHub provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows; 



#### 创建一个工作流

- 创建 `.github/workflow/` 文件夹

- 创建 `learn-github-actions.yml`文件，并添加以下内容

    ```yacas
    // 可选，工作流名称
    name: learn-github-actions
    // 指定工作流的触发器，This is triggered by a push to every branch; for examples of syntax that runs only on pushes to specific branches, paths, or tags, 
    on: [push]
    jobs:
      check-bats-version: // 定义的job名
        runs-on: ubuntu-latest // 在ubuntu最新版本的运行器上直接执行
        steps: // 这个job下的所有步骤，Each item nested under this section is a separate action or shell script.
    			- uses: actions/checkout@v3
    			- uses: actions/setup-node@v3
    				with:
    					node-version: '14'
          - run: npm install -g bats
    			- run: bats -v
    
    ```

- 提交这些修改并推送到远程仓库

see "[Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."



[参考文章 github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)

