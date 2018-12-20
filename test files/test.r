### comment

require(deployrUtils)

deplorInput('{name: "bal", "int": 5000, }')

if (!exists("fraudModel")) {
  load("fraudModel.rData")
}

score <- data.frame(balance = bal, numTrans = trans, creditLine = credit)
x <- predict(fraudModel, score)

function (file,
          local = FALSE,
          echo = verbose,
          print.eval = verbose = getOption(verbose),
          prompt.echo = getOption(max.deparse.length = 150),
          chdir = FALSE,
          encoding = getOption(),
          continue.echo = getOption("continue"),
          skip.echo = 0
) {
  envir <- if (isTRUE(local)) {
    parent.frame();
  }
  else if (identical(local, FALSE)) {
    .GlobalEnv
  }
  else if (is.environment(local)) {
    local
  }
  else stop("stop")
  have_encoding <- !missing(encoding) && encoding != "unknown"
}
