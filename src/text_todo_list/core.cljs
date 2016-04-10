(ns text-todo-list.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [markdown.core :refer [md->html]]
            [clojure.string :as string]
            [hiccups.runtime :as hiccupsrt])
  (:import goog.crypt))

(enable-console-print!)

(defn parse-title [lines]
  (let [line (first (filter #(= (first %) \-) lines))]
    (when line
      (->> line
           (re-matches #"^-\s*(.+)$")
           (second)))))

(defn parse-body [lines]
  (->> lines
       (filter #(= (first %) \|))
       (map #(second (re-matches #"^\|\s{0,1}(.*)$" %)))
       (string/join \newline)
       (md->html)))

(defn parse-tags [lines]
  (->> lines
       (filter #(= (first %) \+))
       (map #(second (re-matches #"^\+\s*(.*)$" %)))
       (map #(string/split % \space))
       (apply concat)
       (set)))

(defn gen-color-code [string]
  (as-> string s
    (goog.crypt.stringToUtf8ByteArray s)
    (reduce + s)
    (mod s 18)
    (str "c" s)))

(defn parse [text tagc tage]
  (let [tasks (string/split text "\n\n")
        tagc (string/split tagc \space)
        tage (string/split tage \space)]
    (loop [tasks tasks, result ""]
      (if (not-empty tasks)
        (let [lines (string/split-lines (first tasks))
              tags (parse-tags lines)]
          (if (and (every? tags tagc) (not-any? tags tage))
            (let [html (html [:div.task
                              [:p.title (parse-title lines)]
                              [:div.content (parse-body lines)]
                              [:div.tag (map (fn [tag] [:a {:class (gen-color-code tag)} tag]) tags)]])]
              (recur (next tasks) (str result html)))
            (recur (next tasks) result)))
        result))))

  (defn main []
    (let [input-box (.getElementById js/document "input-box") ; TODO: 设为全局 atom
          view-box (.getElementById js/document "view-box")
          search-contain (.getElementById js/document "search-contain")
          search-exclude (.getElementById js/document "search-exclude")]
      (set! (.-value input-box) (str "- 纯文本 TODO List\n"
                                     "|\n"
                                     "| `|` 里面的内容会被作为 Markdown 解析\n"
                                     "|\n"
                                     "| ![Clojure](http://clojure.org/images/clojure-logo-120b.png)\n"
                                     "| 插入图片什么的\n"
                                     "|\n"
                                     "| - 列表 `code`\n"
                                     "| - 列表项目2\n"
                                     "|\n"
                                     "+ 这是标签 坑 Clojure WASD\n"
                                     "+ 还可以多行\n"
                                     "\n"
                                     "- 另一个项目\n"
                                     "| ~~不知道写什么好~~  \n"
                                     "| 总之这是演示  \n"
                                     "+ 未完成 xxx\n"
                                     "\n"
                                     "- 添加过滤功能\n"
                                     "| 可以按标签过滤  \n"
                                     "| 过滤必须包含的标签,\n"
                                     "| 以及不能包含的标签\n"
                                     "+ 功能 Clojure 已完成"))
      (set! (.-oninput input-box)
            #(set! (.-innerHTML view-box) (parse (.-value input-box)
                                                 (.-value search-contain)
                                                 (.-value search-exclude))))
      ((.-oninput input-box))

      (set! (.-oninput search-contain)
            #((.-oninput input-box)))

      (set! (.-oninput search-exclude)
            #((.-oninput input-box)))))

(set! (.-onload js/window) main)

(defn on-js-reload []
  (main))
