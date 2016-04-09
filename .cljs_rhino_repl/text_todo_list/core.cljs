(ns text-todo-list.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [markdown.core :refer [md->html]]
            [clojure.string :as string]
            [hiccups.runtime :as hiccupsrt]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

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

(defn parse [text]
  (let [lines (string/split-lines text)
        title (parse-title lines)
        body (parse-body lines)
        tags (parse-tags lines)]
    (html [:div.paper
           [:p.title title]
           [:div.content body]
           [:div.tag (map (fn [tag] [:a tag]) tags)]])))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
