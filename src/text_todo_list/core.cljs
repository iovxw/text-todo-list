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
       (apply concat)))

(defn gen-color-code [string]
  (as-> string s
    (goog.crypt.stringToUtf8ByteArray s)
    (reduce + s)
    (mod s 18)
    (str "c" s)))

(defn parse [text]
  (let [lines (string/split-lines text)
        title (parse-title lines)
        body (parse-body lines)
        tags (parse-tags lines)]
    (html [:div.task
           [:p.title title]
           [:div.content body]
           [:div.tag (map (fn [tag] [:a {:class (gen-color-code tag)} tag]) tags)]])))

(defn main []
  (let [input-box (.getElementById js/document "input-box")
        view-box (.getElementById js/document "view-box")]
    (set! (.-value input-box) (str "- 纯文本 TODO List\n"
                                   "|\n"
                                   "| `|` 里面的内容会被作为 Markdown 解析\n"
                                   "|\n"
                                   "| ![Clojure](http://clojure.org/images/clojure-logo-120b.png)\n"
                                   "| 插入图片什么的\n"
                                   "|\n"
                                   "| - 列表\n"
                                   "| - 列表项目2\n"
                                   "|\n"
                                   "+ 这是标签 坑 Clojure WASD\n"
                                   "+ 还可以多行\n"
                                   "\n"
                                   "- 另一个项目\n"
                                   "| 不知道写什么好  \n"
                                   "| 总之这是演示  \n"
                                   "| 可能还会加个按标签过滤功能\n"
                                   "+ 未完成 xxx"))
    (set! (.-oninput input-box)
          #(let [text (.-value input-box)
                 blocks (string/split text "\n\n")
                 tasks (map parse blocks)
                 tasks-html (string/join tasks)]
             (set! (.-innerHTML view-box) tasks-html)))
    ((.-oninput input-box))))

(set! (.-onload js/window) main)
