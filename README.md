# check-page-diff

## What is this

This tool compares the screenshots of two URLs to display the differences and check for regressions.

It was created for the purpose of easily comparing the differences between the production environment and the staging environment when updating UI-related libraries on public web pages.

## How to use

Install `direnv`.

```shell
$ cp .envrc.sample .envrc
$ cp targets.json.sample targets.json
```

Copy the configuration files with the above commands.

Open `.envrc` and specify the URLs you want to compare.

```shell
export EXPECTED_BASE_URL="https://example.com/"
export ACTUAL_BASE_URL="https://staging.example.com/"
```

Open `targets.json` and specify the resources you want to compare.

```json
{
  "targets": [
    "index.html",
    "tips/how-to-use",
    "help/index",
    "help/cases/2345"
  ]
}
```

Execute the following commands:

```shell
$ direnv allow
$ docker compose up --build
```

If executed successfully, the comparison results will be displayed in the terminal.

Additionally, you can open [http://localhost:3000/.reg/index.html](http://localhost:3000/.reg/index.html) to view the details of the differences.
